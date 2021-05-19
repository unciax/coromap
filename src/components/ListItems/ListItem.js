import React from "react";
import Icon from "@material-ui/core/Icon";

import "./styles.scss";

const ListItem = props => {
    const { data } = props;

    return(
        <div className="list-item" key={data["店家名稱"]}>
            <div><h2>{data["店家名稱"]} <Icon onClick={()=>{ window.open(data["Google map url"], "_blank") }}>map</Icon></h2></div>
            <p>店家防疫措施: {data["店家防疫措施"]}</p>
            <p>是否仍提供內用服務: {data["是否仍提供內用服務"]}</p>
            <p>是否提供外帶: {data["是否提供外帶"]}</p>
            <p>是否提供外送: {data["是否提供外送"]}</p>
            <p>是否繼續維持營業: {data["是否繼續維持營業"]}</p>
            <p>時間戳記: {data["時間戳記"]}</p>
            <p>營業時間調整情況: {data["營業時間調整情況"]}</p>
            <p>防疫外帶或外送優惠: {data["防疫外帶或外送優惠"]}</p>
        </div>
    );
};


export default ListItem;