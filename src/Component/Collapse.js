import React from 'react';


class Collapse extends React.Component {


    constructor() {
        super(); //react component içindeki şeyler almamıza yarar.

        this.state = {
            showContent: false  //props değiştirilemez,state değiştirelbilir
        }
        /*  this.showMore=()=>{
 
         } */
        /*  this.showMore = this.showMore.bind(this) */
    }

    /*    showMore() {
           this.setState({ showContent: true })
       } */

    showMore = () => {
        this.setState({
            showContent: true
        })   //!this.state.showContent
    }


    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    Link with href
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show " >
                            {this.props.children}

                        </div>
                    ) : null
                }


            </div>


        );
    };

}




export default Collapse;