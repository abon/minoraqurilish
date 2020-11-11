import { Route, Switch } from "react-router-dom";
import { Jamiyat, Home, Rahbariyat, Kasaba, Vacancy, Haridlar, Konkurslar, Shartnomalar, Mahsulotlar } from './index'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/bosh-sahifa" component={Home} exact />
                <Route path="/jamiyat-haqida" component={Jamiyat} exact />
                <Route path="/rahbariyat" component={Rahbariyat} exact />
                <Route path="/kasaba" component={Kasaba} exact />
                <Route path="/vacancy" component={Vacancy} exact />
                <Route path="/haridlar" component={Haridlar} exact />
                <Route path="/konkurslar" component={Konkurslar} exact />
                <Route path="/shartnomalar" component={Shartnomalar} exact />
                <Route path="/mahsulotlar" component={Mahsulotlar} exact />
            </Switch>
        </div>
    )
}

export default Routes
