import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import './scss/app';
import Form from './Form';

export default class App extends React.Component<IAppProps, IAppState> {

    render () {
        return (
        <>
            <StripeProvider apiKey="pk_test_8hdBBnvqcTf29c9JgcftXz9b00ZND2xBT9">
                <Elements>
                    <Form />
                </Elements>
            </StripeProvider>
        </>
        )
    }
}

interface IAppProps {

}

interface IAppState {
}