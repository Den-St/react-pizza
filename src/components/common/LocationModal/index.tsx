import React from "react";
import {CurrentLocation, ChooseLocationButton, OtherLocations, LocIcon} from "./style";
import {locations} from "../../../constants";
import {LocationT} from "../../../types/common";
import {Modal} from "../Modal";

type locationModalProps = {
    currentLocation: LocationT,
    chooseLocation: (location:LocationT) => void,
    onClose?: () => void;
}
export const LocationModal:React.FC<locationModalProps> = ({currentLocation,chooseLocation,onClose}) =>{
    return <Modal onClose={onClose}>
            <LocIcon viewBox={'-5 0 26 16'} type={'location'}/>
            <CurrentLocation>
                <span>{currentLocation.location}</span>
            </CurrentLocation>
            <OtherLocations>
                {locations.map((el) => el.id !== currentLocation.id ?
                    <ChooseLocationButton key={el.id} onClick={() => chooseLocation(el)}>
                        {el.location}
                    </ChooseLocationButton> : null)
                }
            </OtherLocations>
        </Modal>
}