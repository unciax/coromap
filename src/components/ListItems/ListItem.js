import React from "react";
import Icon from "@material-ui/core/Icon";

import "./styles.scss";

const ListItem = props => {
    const { data } = props;
    const fillZero = num => {
        return parseInt(num) > 9? parseInt(num) : `0${parseInt(num)}`;
    }
    const dateTransform = datetime => {
        const date = new Date(datetime * 1000);
        return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${fillZero(date.getHours())}:${fillZero(date.getMinutes())}:${fillZero(date.getSeconds())}`
    }
    return(
        <div className="list-item" key={data["shop_name"]}>
            <div><h2>{data["shop_name"]} <Icon onClick={()=>{ window.open(data["url"], "_blank") }}>map</Icon></h2></div>
            <p>店家防疫措施: {data["prevention_measures"]}</p>
            <p>是否仍提供內用服務: {data["inside"]}</p>
            <p>內用防疫措施: {data["inside_status"]}</p>
            <p>是否提供外帶: {data["outside"]}</p>
            <p>是否提供外送: {data["delivery"]}</p>
            <p>是否繼續維持營業: {data["open"]}</p>
            <p>時間戳記: {dateTransform(data["last_updated_at"])}</p>
            <p>營業時間調整情況: {data["open_time_change"]}</p>
            <p>防疫外帶或外送優惠: {data["discount"]}</p>
        </div>
    );
};


export default ListItem;