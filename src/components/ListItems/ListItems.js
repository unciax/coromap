import React from "react";
import Icon from "@material-ui/core/Icon";

import ListItem from "./ListItem";

import "./styles.scss";
import { Collapse } from "@material-ui/core";

const ListItems = props => {
    const { mapDataList } = props;
    const [state, setState] = React.useState({
        isContainerOpen: false,
    });
    
    const toggleUpdateForm = () => setState(state=>({ ...state, isContainerOpen: !state.isContainerOpen }));

    return(
        <div className="list-items">
            <div className="list-items-header">
                <h2>店家列表</h2>
                <Icon onClick={toggleUpdateForm}>{state.isContainerOpen ? "arrow_drop_down" : "arrow_drop_up"}</Icon>
            </div>
            <Collapse in={state.isContainerOpen}>
                {Object.entries(mapDataList).map(item=> <ListItem key={item[0]} data={item[1]} />)}
            </Collapse>
        </div>
    );
};

export default ListItems;