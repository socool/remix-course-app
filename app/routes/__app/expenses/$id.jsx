// /expenses/<some-id> => /expenses/expense-1, /expenses/e-1
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { useNavigate } from "@remix-run/react";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}
