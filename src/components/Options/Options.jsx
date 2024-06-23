export default function Options({ onFeedback, onReset, showReset }) {
  return (
    <ul>
      <li>
        <button onClick={() => onFeedback('good')}>Good</button>
      </li>
      <li>
        <button onClick={() => onFeedback('neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onFeedback('bad')}>Bad</button>
      </li>
      {showReset && (
        <li>
          <button onClick={onReset}>Reset</button>
        </li>
      )}
    </ul>
  );
}
