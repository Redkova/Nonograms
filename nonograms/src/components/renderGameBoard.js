import generateClues from '../game/clueGenarator';
import createGameField from './gameBoard';
import { createTopClues, createLeftClues } from './clues';

export default function renderGameBoard({ gameField, topClues, leftClues, onCellMark, onCellCross }) {
  function renderGame(pattern) {
    createGameField(gameField, pattern, onCellMark, onCellCross);

    const { rowClues, colClues } = generateClues(pattern);

    createTopClues(topClues, colClues);
    createLeftClues(leftClues, rowClues);
  }

  return renderGame;
}
