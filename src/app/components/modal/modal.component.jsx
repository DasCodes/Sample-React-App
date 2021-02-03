import './modal.styles.scss';
import CloseButton from './close.svg';

function Avatar(props) {
    if (props.avatar) {
        return (
            <div className="avatar">
                <img src={props.avatar} alt=""/>
            </div>
        );
    }
    return null;
}

function ModalMain(props) {
    return (
        <div className='modal'>
            <div onClick={props.props.modalHandler} className='btn-close'>
                <img src={CloseButton} alt='' />
            </div>
            <div className='thumbnail'>
                <img src={props.props.data.thumbnail.large} alt='' />
            </div>
            <div className="content">
                <h3 className='title'>{props.props.data.title}</h3>
                <p className='description'>{props.props.data.content}</p>
            </div>
            <div className="author">
                <Avatar avatar={props.props.data.author.avatar} />
                <p className='author-name'>{props.props.data.author.name} - {props.props.data.author.role}</p>
            </div>
        </div>
    );
}

export const Modal = (props) => {
    if (!props.modal) return null;
    return (
        <div className="modal-container">
            <ModalMain props={props} />
        </div>
    );
}
