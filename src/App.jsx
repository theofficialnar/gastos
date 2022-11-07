import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Typography>{count}</Typography>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
        </div>
    );
}

export default App;
