import ds from "downstream";

const nullBytes24 = `0x${"00".repeat(24)}`;
const redBuildingTopId = "04";
const blueBuildingTopId = "17";
const blueCounterKindId = "🔵 Blue Display Building";
const redCounterKindId = "🔴 Red Display Building";
const countdownBuildingKindId = "Countdown Building";

let blueCounter;
let redCounter;
let countdownBuilding;

export default async function update(state) {
    //
    // Action handler functions
    //

    // An action can set a form submit handler which will be called after the action along with the form values
    let handleFormSubmit;

    const join = () => {
        const mobileUnit = getMobileUnit(state);

        const payload = ds.encodeCall("function join()", []);

        ds.dispatch({
            name: "BUILDING_USE",
            args: [selectedBuilding.id, mobileUnit.id, payload],
        });
    };

    // NOTE: Because the 'action' doesn't get passed the form values we are setting a global value to a function that will
    const start = () => {
        handleFormSubmit = startSubmit;
    };

    const startSubmit = (values) => {
        const selectedBuildingKindBaseRed = values["buildingKindIdBaseRed"];
        const selectedBuildTypeBaseBlue = values["buildingKindIdBaseBlue"];

        // Verify selected buildings are different from each other
        if (selectedBuildingKindBaseRed == selectedBuildTypeBaseBlue) {
            console.error("Team buildings must be different from each other", {
                selectedBuildingKindBaseRed,
                selectedBuildTypeBaseBlue,
            });
            return;
        }

        const mobileUnit = getMobileUnit(state);
        const payload = ds.encodeCall(
            "function start(bytes24 redBaseID, bytes24 blueBaseID)",
            [selectedBuildingKindBaseRed, selectedBuildTypeBaseBlue]
        );

        ds.dispatch({
            name: "BUILDING_USE",
            args: [selectedBuilding.id, mobileUnit.id, payload],
        });
    };

    const claim = () => {
        const mobileUnit = getMobileUnit(state);

        const payload = ds.encodeCall("function claim()", []);

        ds.dispatch({
            name: "BUILDING_USE",
            args: [selectedBuilding.id, mobileUnit.id, payload],
        });
    };

    const reset = () => {
        const mobileUnit = getMobileUnit(state);
        const payload = ds.encodeCall("function reset()", []);

        ds.dispatch({
            name: "BUILDING_USE",
            args: [selectedBuilding.id, mobileUnit.id, payload],
        });
    };

    // uncomment this to browse the state object in browser console
    // this will be logged when selecting a unit and then selecting an instance of this building
    // very spammy for a plugin marked as alwaysActive
    // logState(state);

    // \todo
    // plugins run for a buildingKind and if marked as alwaysActive in the manifest
    // this update will ba called every regardless of whether a building is selected
    // so we need to find all HQs on the map and update them each in turn
    //
    // for now we just update the first we find
    const dvbBuildingName = "Registery Office";
    const selectedBuilding = state.world?.buildings.find(
        (b) => b.kind?.name?.value == dvbBuildingName
    );

    // early out if we don't have any buildings or state isn't ready
    if (!selectedBuilding || !state?.world?.buildings) {
        console.log("NO DVB BUILDING FOUND");
        return {
            version: 1,
            map: [],
            components: [
                {
                    id: "dbhq",
                    type: "building",
                    content: [
                        {
                            id: "default",
                            type: "inline",
                            html: "",
                            buttons: [],
                        },
                    ],
                },
            ],
        };
    }

    const {
        prizePool,
        gameActive,
        startBlock,
        endBlock,
        buildingKindIdRed,
        buildingKindIdBlue,
        teamRedLength,
        teamBlueLength,
    } = getHQData(selectedBuilding);

    const localBuildings = range5(state, selectedBuilding);
    const redCount = countBuildings(localBuildings, buildingKindIdRed);
    const blueCount = countBuildings(localBuildings, buildingKindIdBlue);

    connectDisplayBuildings(state, localBuildings);

    // check current game state:
    // - NotStarted : GameActive == false
    // - Running : GameActive == true && endBlock < currentBlock
    // - GameOver : GameActive == true && endBlock >= currentBlock

    // we build a list of button objects that are rendered in the building UI panel when selected
    let buttonList = [];

    // we build an html block which is rendered above the buttons
    let htmlBlock =
        '<h3><span style="color: red">Red</span> vs <span style="color: blue">Blue</span></h3>';

    const canJoin = !gameActive;

    const canStart = !gameActive && teamRedLength > 0 && teamBlueLength > 0;

    if (canJoin) {
        htmlBlock += `<p>total players: ${
            teamRedLength + teamBlueLength
        }</p></br>`;
    }

    // Show what team the unit is on
    const mobileUnit = getMobileUnit(state);
    let isOnTeam = false;
    if (mobileUnit) {
        let unitTeam = "";

        for (let i = 0; i < teamRedLength; i++) {
            if (mobileUnit.id == getHQTeamUnit(selectedBuilding, "Red", i)) {
                unitTeam = "🐤";
                break;
            }
        }

        if (unitTeam === "") {
            for (let i = 0; i < teamBlueLength; i++) {
                if (
                    mobileUnit.id == getHQTeamUnit(selectedBuilding, "Blue", i)
                ) {
                    unitTeam = "🍔";
                    break;
                }
            }
        }

        if (unitTeam !== "") {
            isOnTeam = true;
            htmlBlock += `
                <p>You are on team ${unitTeam}</p></br>
            `;
        }
    }

    if (!gameActive) {
        if (!isOnTeam) {
            buttonList.push({
                text: `Join Game`,
                type: "action",
                action: join,
                disabled: !canJoin || isOnTeam,
            });
        } else {
            // Check reason why game can't start
            const waitingForStartCondition =
                teamRedLength != teamBlueLength ||
                teamRedLength + teamBlueLength < 2;
            let startConditionMessage = "";
            if (waitingForStartCondition) {
                if (teamRedLength + teamBlueLength < 2) {
                    startConditionMessage = "Waiting for players...";
                } else if (teamRedLength != teamBlueLength) {
                    startConditionMessage = "Teams must be balanced...";
                }
            }

            buttonList.push({
                text: waitingForStartCondition
                    ? startConditionMessage
                    : "Start",
                type: "action",
                action: start,
                disabled: !canStart || teamRedLength != teamBlueLength,
            });
        }
    }

    if (canStart) {
        // Show options to select team buildings
        htmlBlock += `
            <h3>Select Team Buildings</h3>
            <p> 🔴 Team 🔴</p>
            ${getBuildingKindSelectHtml(
                state,
                redBuildingTopId,
                "buildingKindIdRed"
            )}
            <p>🔵 Team 🔵</p>
            ${getBuildingKindSelectHtml(
                state,
                blueBuildingTopId,
                "buildingKindIdBlue"
            )}
        `;
    }

    if (gameActive) {
        // Display selected team buildings
        const buildingKindDuck =
            state.world.buildingKinds.find((b) => b.id === buildingKindIdRed) ||
            {};
        const buildingKindBurger =
            state.world.buildingKinds.find(
                (b) => b.id === buildingKindIdBlue
            ) || {};
        htmlBlock += `
            <h3>Team Buildings:</h3>
            <p>Team 🔴: ${buildingKindDuck.name?.value}</p>
            <p>Team 🔵: ${buildingKindBurger.name?.value}</p></br>

        `;

        buttonList.push({
            text: "End Game",
            type: "action",
            action: claim,
            disabled: blueCount === redCount,
        });

        // Reset is always offered (requires some trust!)
        buttonList.push({
            text: "Reset",
            type: "action",
            action: reset,
            disabled: false,
        });

        // build up an array o fmap objects which are used to update display buildings
        // always show the current team counts
        const mapObj = [
            {
                type: "building",
                id: `${blueCounter ? blueCounter.id : ""}`,
                key: "labelText",
                value: `${blueCount}`,
            },
            {
                type: "building",
                id: `${redCounter ? redCounter.id : ""}`,
                key: "labelText",
                value: `${redCount}`,
            },
        ];

        return {
            version: 1,
            map: mapObj,
            components: [
                {
                    id: "dbhq",
                    type: "building",
                    content: [
                        {
                            id: "default",
                            type: "inline",
                            html: htmlBlock,
                            submit: (values) => {
                                if (typeof handleFormSubmit == "function") {
                                    handleFormSubmit(values);
                                }
                            },
                            buttons: buttonList,
                        },
                    ],
                },
            ],
        };
    }

    // --- Duckbur HQ Specific functions

    function getHQData(selectedBuilding) {
        const gameActive = getDataBool(selectedBuilding, "gameActive");
        const startBlock = getDataInt(selectedBuilding, "startBlock");
        const endBlock = getDataInt(selectedBuilding, "endBlock");
        const buildingKindIdRed = getDataBytes24(
            selectedBuilding,
            "buildingKindIdRed"
        );
        const buildingKindIdBlue = getDataBytes24(
            selectedBuilding,
            "buildingKindIdBlue"
        );
        const teamRedLength = getDataInt(selectedBuilding, "teamRedLength");
        const teamBlueLength = getDataInt(selectedBuilding, "teamBlueLength");

        return {
            prizePool,
            gameActive,
            startBlock,
            endBlock,
            startBlock,
            buildingKindIdRed,
            buildingKindIdBlue,
            teamRedLength,
            teamBlueLength,
        };
    }

    function getHQTeamUnit(selectedBuilding, team, index) {
        return getDataBytes24(selectedBuilding, `team${team}Unit_${index}`);
    }

    // search the buildings list ofr the display buildings we're gpoing to use
    // for team counts and coutdown
    function connectDisplayBuildings(state, buildings) {
        if (!blueCounter) {
            blueCounter = buildings.find((element) =>
                getBuildingKindsByTileLocation(
                    state,
                    element,
                    blueCounterKindId
                )
            );
        }
        if (!redCounter) {
            redCounter = buildings.find((element) =>
                getBuildingKindsByTileLocation(state, element, redCounterKindId)
            );
        }
        if (!countdownBuilding) {
            countdownBuilding = buildings.find((element) =>
                getBuildingKindsByTileLocation(
                    state,
                    element,
                    countdownBuildingKindId
                )
            );
        }
    }

    function formatTime(timeInMs) {
        let seconds = Math.floor(timeInMs / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);

        seconds %= 60;
        minutes %= 60;

        // Pad each component to ensure two digits
        let formattedHours = String(hours).padStart(2, "0");
        let formattedMinutes = String(minutes).padStart(2, "0");
        let formattedSeconds = String(seconds).padStart(2, "0");

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    const countBuildings = (buildingsArray, kindID) => {
        return buildingsArray.filter((b) => b.kind?.id == kindID).length;
    };

    function getBuildingKindSelectHtml(state, buildingTopId, selectId) {
        return `
        <select id="${selectId}" name="${selectId}">
            ${state.world.buildingKinds
                .filter(
                    (b) =>
                        b.model &&
                        b.model.value.substring(3, 5) === buildingTopId
                )
                .map(
                    (b) => `
                .filter((b) => b.model && b.model.value.substring(3, 5) === buildingTopId)
                    <option value="${b.id}">${b.name.value}</option>
                `
                )}
        </select>
    `;
    }

    // --- Generic State helper functions

    function getMobileUnit(state) {
        return state?.selected?.mobileUnit;
    }

    // search through all the bags in the world to find those belonging to this eqipee
    // eqipee maybe a building, a mobileUnit or a tile
    function getEquipeeBags(state, equipee) {
        return equipee
            ? (state?.world?.bags || []).filter(
                  (bag) => bag.equipee?.node.id === equipee.id
              )
            : [];
    }

    function logState(state) {
        console.log("State sent to pluging:", state);
    }

    // get an array of buildings withiin 5 tiles of building
    function range5(state, building) {
        const range = 5;
        const tileCoords = getTileCoords(building?.location?.tile?.coords);
        let i = 0;
        const foundBuildings = [];
        for (let q = tileCoords[0] - range; q <= tileCoords[0] + range; q++) {
            for (
                let r = tileCoords[1] - range;
                r <= tileCoords[1] + range;
                r++
            ) {
                let s = -q - r;
                let nextTile = [q, r, s];
                if (distance(tileCoords, nextTile) <= range) {
                    state?.world?.buildings.forEach((b) => {
                        if (!b?.location?.tile?.coords) return;

                        const buildingCoords = getTileCoords(
                            b.location.tile.coords
                        );
                        if (
                            buildingCoords[0] == nextTile[0] &&
                            buildingCoords[1] == nextTile[1] &&
                            buildingCoords[2] == nextTile[2]
                        ) {
                            foundBuildings[i] = b;
                            i++;
                        }
                    });
                }
            }
        }
        return foundBuildings;
    }

    function hexToSignedDecimal(hex) {
        if (hex.startsWith("0x")) {
            hex = hex.substr(2);
        }

        let num = parseInt(hex, 16);
        let bits = hex.length * 4;
        let maxVal = Math.pow(2, bits);

        // Check if the highest bit is set (negative number)
        if (num >= maxVal / 2) {
            num -= maxVal;
        }

        return num;
    }

    function getTileCoords(coords) {
        return [
            hexToSignedDecimal(coords[1]),
            hexToSignedDecimal(coords[2]),
            hexToSignedDecimal(coords[3]),
        ];
    }

    function distance(tileCoords, nextTile) {
        return Math.max(
            Math.abs(tileCoords[0] - nextTile[0]),
            Math.abs(tileCoords[1] - nextTile[1]),
            Math.abs(tileCoords[2] - nextTile[2])
        );
    }

    function getBuildingKindsByTileLocation(state, building, kindID) {
        return (state?.world?.buildings || []).find(
            (b) => b.id === building.id && b.kind?.name?.value == kindID
        );
    }

    // get first slot in bags that matches item requirements
    function findBagAndSlot(bags, requiredItemId, requiredBalance) {
        for (const bag of bags) {
            for (const slotKey in bag.slots) {
                const slot = bag.slots[slotKey];
                if (
                    (!requiredItemId || slot.item.id == requiredItemId) &&
                    requiredBalance <= slot.balance
                ) {
                    return {
                        bag: bag,
                        slotKey: slot.key, // assuming each slot has a 'key' property
                    };
                }
            }
        }
        return { bag: null, slotKey: -1 };
    }

    // -- Building Data

    function getData(buildingInstance, key) {
        return getKVPs(buildingInstance)[key];
    }

    function getDataBool(buildingInstance, key) {
        var hexVal = getData(buildingInstance, key);
        return typeof hexVal === "string" ? parseInt(hexVal, 16) == 1 : false;
    }

    function getDataInt(buildingInstance, key) {
        var hexVal = getData(buildingInstance, key);
        return typeof hexVal === "string" ? parseInt(hexVal, 16) : 0;
    }

    function getDataBytes24(buildingInstance, key) {
        var hexVal = getData(buildingInstance, key);
        return typeof hexVal === "string" ? hexVal.slice(0, -16) : nullBytes24;
    }

    function getKVPs(buildingInstance) {
        return buildingInstance.allData.reduce((kvps, data) => {
            kvps[data.name] = data.value;
            return kvps;
        }, {});
    }
}

// the source for this code is on github where you can find other example buildings:
// https://github.com/playmint/ds/tree/main/contracts/src/example-plugins
