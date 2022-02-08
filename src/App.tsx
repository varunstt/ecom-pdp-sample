import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { PageWithHeader } from './components/page-with-header/PageWithHeader';
import { ProductDetail } from './features/product-deatil/ProductDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageWithHeader component={ProductDetail} />} />
            </Routes>
            {/* Routes with element={<PageWithHeader component={ProductDetail}
                Common Header component with remaining layout passed as prop component
            */}
        </BrowserRouter>
    );
}

export default App;
