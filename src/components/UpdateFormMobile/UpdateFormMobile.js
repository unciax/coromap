import React from "react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

import "./styles.scss";


export default props => {
    const [state, setState] = React.useState({
        isModalOpen: false
    });

    const handleToggleModal = () => {
        setState(state=> ({ ...state, isModalOpen: !state.isModalOpen}));
    }

    return(
        <>  
            <Modal
            open={state.isModalOpen}
            // onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >   
                <div className="inputs-containers">
                    <div className="inputs-containers-headers"><Icon onClick={handleToggleModal}>close</Icon></div>
                    <div className="inputs-containers-inputs">
                    <TextField label="店家名稱" />
                    <FormControl>
                        <FormLabel component="legend">是否繼續維持營業</FormLabel>
                        <RadioGroup label="" name="">
                            <FormControlLabel value="female" control={<Radio />} label="是" />
                            <FormControlLabel value="male" control={<Radio />} label="否" />
                        </RadioGroup>
                        <FormLabel component="legend">是否提供內用服務</FormLabel>
                        <RadioGroup label="" name="">
                            <FormControlLabel value="female" control={<Radio />} label="是" />
                            <FormControlLabel value="male" control={<Radio />} label="否" />
                            <FormControlLabel value="male" control={<Radio />} label="不確定" />
                        </RadioGroup>
                        <FormLabel component="legend">是否提供外帶</FormLabel>
                        <RadioGroup label="" name="">
                            <FormControlLabel value="female" control={<Radio />} label="是" />
                            <FormControlLabel value="male" control={<Radio />} label="否" />
                            <FormControlLabel value="male" control={<Radio />} label="不確定" />
                        </RadioGroup>
                        <FormLabel component="legend">是否提供外送</FormLabel>
                        <RadioGroup label="" name="">
                            <FormControlLabel value="female" control={<Radio />} label="是" />
                            <FormControlLabel value="male" control={<Radio />} label="否" />
                            <FormControlLabel value="male" control={<Radio />} label="不確定" />
                        </RadioGroup>
                    </FormControl>
                    <TextField label="Google map Url" />
                    <TextField label="防疫外帶或外送優惠服務" />
                    <TextField label="內用座位調整情況" />
                    <TextField label="營業時間調整情況"/>
                    <FormLabel component="legend">店家防疫措施</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                            <Checkbox
                            />
                            }
                            label="梅花座"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox

                            />
                            }
                            label="隔板"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                            />
                            }
                            label="廁所關閉"
                        />
                    </FormGroup>
                    </div>
                </div>
            </Modal>
            <div className="icon-container">
                <Icon onClick={handleToggleModal}>view_module_icon</Icon>
            </div>
        </>
    )
}