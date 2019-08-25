import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../Constants/Routes';

const Navigation = () => (
    <div>

        <Link to={ROUTES.LOGIN}/>

        <Link to={ROUTES.HOME}/>

        <Link to={ROUTES.SIGN_UP}/>

    </div>
);

export default Navigation;