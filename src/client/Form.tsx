import * as React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

class Form extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        this.state = {
            name: ""
        }
    }

    handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("Test");
    }

    render() {
        return (
            <main className="container">
                <form 
                    className="form-group mt-3 border border-primary rounded shadow-lg p-3"
                    onSubmit={this.handleSubmit}
                    >
                    <label>Name</label>
                    <input
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
                    />
                    <label>Amount</label>
                    <input
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
                    />
                    <label>Credit Card Information:</label>
                    <CardElement className="p-2 border border0-dark" />
                    <button className="btn btn-primary border border-dark mt-3">Charge It!</button>
                </form>
            </main>
        )
    }
};

interface IFormProps { };
interface IFormState {
    name: string
};

export default injectStripe(Form);