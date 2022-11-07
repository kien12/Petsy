import { connect } from 'react-redux';
import Review from './review';

class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: this.props.,
      rating: '',
      userId: '',
      productId: '',
      showEditForm: false
    }
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }

  render() {


    return(
      <div className='Review-form-container'>
        {Review}
      </div>
    )
  }
}

export default ReviewForm;