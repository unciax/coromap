import React from "react";

import Maps from "./components/MapView/MapView";
import ListItems from "./components/ListItems/ListItems";
import UpdateFormMobile from "./components/UpdateFormMobile/UpdateFormMobile";
import UpdateForm from "./components/UpdateForm/UpdateForm";
import { useSnackbar } from "notistack";
import { message } from "./utils/common";


import { fetchMapData, updateStoresInfo } from "./utils/api";

import "./app.scss";

function App() {
  const [state, setState] = React.useState({
    isSideMenuOpen: true,
    fetchMapDataLoading: false,
    mapDataList: [],
  });
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(()=>{
    handleFetchMapData();
  }, [])

  const handleFetchMapData = async () => {
    setState(state => ({ ...state, fetchMapDataLoading: true }));

    const res = await fetchMapData();
    
    if(res.status === 200){
      try{
        setState(state => ({ ...state, mapDataList: res.data, fetchMapDataLoading: false }));
      }catch(err){

        setState(state => ({ ...state, fetchMapDataLoading: false }));
      }
    }else{
      setState(state => ({ ...state, fetchMapDataLoading: false }));
    };
  };

  const handleUpdateMapData = async (val) => {
    setState(state => ({ ...state, fetchMapDataLoading: true }));

    const res = await updateStoresInfo(val);
    if(res.status === 200){
      setState(state => ({ ...state, fetchMapDataLoading: false }));
      message( enqueueSnackbar, "上傳店家成功。", "success");
    }else{
      setState(state => ({ ...state, fetchMapDataLoading: false }));
      message( enqueueSnackbar, "上傳店家失敗。", "error");
    };
    window.location.reload();
    // await handleFetchMapData();
  };

  const toggleSideMenu = () => setState(state=>({ ...state, isSideMenuOpen: !state.isSideMenuOpen }));

  const updateStoreInfo = val => {
    handleUpdateMapData(val)
  };

  return (
    <div className="App">
      <UpdateFormMobile />
      <div className={state.isSideMenuOpen ? "side-menu-open" : "side-menu-close"}>
        { state.isSideMenuOpen &&
          <>
              <ListItems mapDataList={state.mapDataList} />
              <UpdateForm updateStoreInfo={updateStoreInfo}/>
          </>
        }
      </div>
      <div className={state.isSideMenuOpen ? "map-container-close" : "map-container-open"}>
        <Maps 
          fetchMapDataLoading={state.fetchMapDataLoading}
          mapDataList={state.mapDataList}
          toggleSideMenu={toggleSideMenu}
          isSideMenuOpen={state.isSideMenuOpen}
        />
      </div>
    </div>
  );
}

export default App;
