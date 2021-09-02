import {lazy, Suspense} from 'react';
import {Switch,Route} from 'react-router';

import LoaderComponent from '../components/animation/_loader.jsx';
import HomeTab from '../components/navigation/home/_home';
import ManageQuestionContainer from '../components/ManageQuestion';

const AboutTab = lazy(()=> import('../components/navigation/about/_about'));
const DashboardTab = lazy(()=> import('../components/navigation/dashboard/_dashboard'));
const LoginTab = lazy(()=> import('../components/navigation/login/_login'));
const CreateSurveyTab = lazy(()=> import('../components/navigation/survey/_createSurvey'));

export default(
 <Suspense fallback={<LoaderComponent/>}> 
    <Switch>
        <Route exact path="/" component={HomeTab}></Route>
        <Route path="/about" component={AboutTab}></Route>
        <Route path="/dashboard" component={DashboardTab}></Route>
        <Route path="/login" component={LoginTab}></Route>
        <Route path="/createsurvey" component={CreateSurveyTab}></Route>
        <Route path="/survey/:id" component={ManageQuestionContainer} />
    </Switch>
  </Suspense>
)