import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { counterSlice } from './store/reducers/CounterSlice';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
    /* const { value } = useAppSelector(state => state.counterReducer)
    const { increment } = counterSlice.actions */

    /* const handleIncClick = () => {
        dispatch(increment(5))
    } */

    return (
        <div className="App">
           {/* <h1>{value}</h1>
           <button onClick={handleIncClick}>+</button> */}
            {/* {isLoading && <h1>Is loading ...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)} */}
            <div style={{display: 'flex'}}>
                <PostContainer/>
                {/* <PostContainer2/> */}
            </div>
        </div>
    );
}

export default App;
