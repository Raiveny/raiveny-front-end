import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
        }
    }
    getHistory = async () => {
        const res = await axios.get('https://raiveny.herokuapp.com/data/history?userEmail=team301project@gmail.com');
        this.setState(
            {
                history: res.data.data,
            }
        );
    }

    componentDidMount() {
        this.getHistory();

    }

    render() {

        return (
            <>
                {this.state.history &&
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Disease Name</th>
                                <th>Medication Name</th>
                                <th>Medication Route</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.history.map((item,idx) =>
                                <tr key={idx}>
                                    <td>{item.Name}</td>
                                    <td>{item.medication[0].medication_Name}</td>
                                    <td>{item.medication[0].medication_route}</td>
                                </tr>

                            )}
                        </tbody>
                    </Table>
                }
            </>
        );
    }
}

export default History;