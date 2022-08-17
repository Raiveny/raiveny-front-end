import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './Tableuser.css';


class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
        }
    }
    getHistory = async () => {
        const URL = `https://raiveny.herokuapp.com/data/history?userEmail=${this.props.useremail}`
        console.log("from table " + URL)
        // const res = await axios.get('https://raiveny.herokuapp.com/data/history?userEmail=team301project@gmail.com');
        const res = await axios.get(URL);

        this.setState(
            {
                history: res.data.data,
            }
        );
        console.log(this.state.history)
    }

    componentDidMount() {
        console.log("inside the componentDidMount");
        this.getHistory();

    }

    render() {

        return (
            <>

                <div className='table'>
                    {this.state.history &&
                        <Table striped responsive bordered hover className='table-user'>
                            <thead className='tableh'>
                                <tr>
                                    <th>Disease Name</th>
                                    <th>Medication Name</th>
                                    <th>Medication Route</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.history.map(item =>
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.medication[0].medication_Name}</td>
                                        <td>{item.medication[0].medication_route}</td>
                                    </tr>

                                )}
                            </tbody>
                        </Table>
                    }
                </div>
            </>
        );
    }
}

export default History;