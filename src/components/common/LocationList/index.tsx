import React from "react";
import {locations} from "../../../constants";
import {ChooseLocationButton, LocationListContainer} from "./styled";
import {LocationT} from "../../../types/common";

type LocationListProps = {
    currentLocation:LocationT,
    chooseLocation:(el:LocationT) => void
}

export const LocationList:React.FC<LocationListProps> = ({currentLocation,chooseLocation}) =>{
    return <LocationListContainer>
        {locations.map((el) => el.id !== currentLocation.id ?
            <ChooseLocationButton key={el.id} onClick={() => chooseLocation(el)}>
                {el.location}
            </ChooseLocationButton> : null)
        }
    </LocationListContainer>
}