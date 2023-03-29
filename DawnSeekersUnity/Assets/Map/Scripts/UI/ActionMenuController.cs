using System;
using System.Linq;
using Cog;
using UnityEngine;

public class ActionMenuController : MonoBehaviour
{
    private ActionMenuButtonController[] _actionButtons;

    private void Start()
    {
        Cog.GameStateMediator.Instance.EventStateUpdated += OnStateUpdated;

        _actionButtons = GetComponentsInChildren<ActionMenuButtonController>();

        gameObject.SetActive(false);
    }

    private void OnDestroy()
    {
        Cog.GameStateMediator.Instance.EventStateUpdated -= OnStateUpdated;
    }

    private void OnStateUpdated(GameState state)
    {
        if (state.Selected.Tiles != null && state.Selected.Tiles.Count > 0)
        {
            var tile = state.Selected.Tiles.ToList()[0];
            var cellPosCube = TileHelper.GetTilePosCube(tile);
            bool isPlayerAtPosition = SeekerManager.Instance.IsPlayerAtPosition(cellPosCube);
            if (isPlayerAtPosition)
            {
                gameObject.SetActive(true);
                transform.position = MapManager.instance.grid.CellToWorld(
                    GridExtensions.CubeToGrid(cellPosCube)
                );

                UpdateButtonStates(state);
            }
            else
            {
                gameObject.SetActive(false);
            }
        }
        else
        {
            gameObject.SetActive(false);
        }
    }

    private void UpdateButtonStates(GameState state)
    {
        if (state.Selected == null)
            return;

        if (state.Selected.Intent == IntentKind.NONE)
        {
            foreach (var btn in _actionButtons)
            {
                btn.Enable();
            }
        }
        else
        {
            foreach (var btn in _actionButtons)
            {
                if (btn.ButtonIntent == state.Selected.Intent)
                {
                    btn.Enable();
                }
                else
                {
                    btn.Disable();
                }
            }
        }
    }
}