import React from 'react';
import zipCodeOptions from '../../mock/addressObject.json'

/**
 * 物件轉陣列
 * @param {*} props 
 * @returns 
 */

function Address(props) {

    const newZipCodeOptions = Object.keys(zipCodeOptions).map((option, index) => {
        let cityId = index;
        let areaList = zipCodeOptions[option];
        const newAreaList = Object.keys(areaList).map((areaOption, index) => {
            return {
                ...areaList[areaOption],
                name: areaOption,
                id: `${cityId}_${index}`
            }
        })
        return {
            children: newAreaList,
            name: option,
            id: index
        }
    })

    return (
        <ul>
            {newZipCodeOptions.map((lsit) => (
                <li>{lsit.name}
                    <ul>
                        {lsit.children.map((item) => (
                            <li>{item.zip_code} {item.name}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default Address;