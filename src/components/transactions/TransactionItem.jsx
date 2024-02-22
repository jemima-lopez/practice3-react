/* eslint-disable react/prop-types */
import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span className="text-sm">Q. {transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className="bg-indigo-700 text-white px-2 rounded-lg gap ml-1"
        >
          X
        </button>
      </div>
    </li>
  );
}
