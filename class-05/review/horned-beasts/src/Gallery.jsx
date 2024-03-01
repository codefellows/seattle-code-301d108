import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeasts from "./HornedBeasts";
import data from './assets/data.json';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';

const Gallery = (props) => {
    console.log(props);

    const [selectedHorns, setSelectedHorns] =useState(null);

    const handleDropdownClick = (horns) => {
        setSelectedHorns(horns);
    }

    const filteredData = selectedHorns ? data.filter(item => item.horns === selectedHorns) : data;

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by Number of Horns
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleDropdownClick(null)}>See All</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDropdownClick(1)}>1 Horn</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDropdownClick(2)}>2 Horns</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDropdownClick(3)}>3 Horns</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDropdownClick(100)}>100 Horns</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div>
                <h2>Gallery</h2>
                <div>
                <Row xs="auto" md="auto" lg="auto">
                    {filteredData.map(obj => {
                    return (
                        <HornedBeasts
                        openModal={props.openModal}
                        key={obj._id}
                        title={obj.title} 
                        description={obj.description} 
                        imageUrl={obj.image_url}
                        horns={obj.horns}
                        onWin={props.onWin}
                        />  
                    )
                        })}
                </Row>
                </div>
            </div>
        </>
    );
};

export default Gallery;
