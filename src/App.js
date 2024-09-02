import {Button,ListGroupItem,Stack} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./Components/BudgetCard";
import AddBudgetModal from "./Components/AddBudgetModal";
import AddExpenseModal from "./Components/AddExpenseModal";
import { useState } from "react";


function App(){

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState(); 
    
  return(
    <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" onClick={()=>setShowAddBudgetModal(true)}>Add Budget</Button>
          <Button variant="outline-primary" onClick={()=>setShowAddExpenseModal(true)}>Add Expense</Button>
        </Stack>
        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(300px,1fr))",
            gap:"1rem",
            alignItems:"flex-start",
          }}
        >
        <BudgetCard name="Entertainment" amount={200} max={2000}></BudgetCard>
        </div>

        <AddBudgetModal
          show={showAddBudgetModal}
          handleClose={()=>setShowAddBudgetModal(false)}
        />

        <AddExpenseModal
              show={showAddExpenseModal}
              defaultBudgetId={addExpenseModalBudgetId}
              handleClose={()=>setShowAddExpenseModal(false)}
        />
    </Container>
  );
};

export default App;

