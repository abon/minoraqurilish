import { Route, Switch } from "react-router-dom";
import { Jamiyat, Home, Rahbariyat } from './index'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/bosh-sahifa" component={Home} exact />
                <Route path="/jamiyat-haqida" component={Jamiyat} exact />
                <Route path="/rahbariyat" component={Rahbariyat} exact />
            </Switch>
        </div>
    )
}

export default Routes
