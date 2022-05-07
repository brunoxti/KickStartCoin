import React from "react";
import { Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import {Link} from '../routes';


export default () =>{
    return(

        <Menu style={{marginTop: '10px'}}>
            <Link route="/">
                <a className="item">CrownCoin</a>
            </Link>
                <Menu.Menu position="right">
                <Link route="/campaigns/new">
                <a className="item">Campaigns</a>
            </Link>

            <Link route="/">
                <a className="item">+</a>
            </Link>

                </Menu.Menu>
        </Menu>
    );
}

