import moment from 'moment';
import './card.styles.scss';

function convertDate(timestamp) {
    let date = new Date(timestamp*1000);
    let formatedDate = moment(date).format("MMM D, YYYY");
    return formatedDate;
}

export const Card = (props) => {
    function modalHandler(data) {
        props.sendModalData(data);
    }
    return (
        props.posts.map((post) => (
            <div className='card' key={post.id}>
                <div onClick={() => modalHandler(post)} className='thumbnail'>
                    <div className='learn-more'>Learn More</div>
                    <img src={post.thumbnail.small} alt=''/>
                </div>
                <div className='card-content'>
                    <div className='pills'>
                        <div className='pill-blue'></div>
                        <div className='pill-yellow'></div>
                    </div>
                    <h4 onClick={() => modalHandler(post)} className='card-title'>{post.title}</h4>
                    <p className='card-description'>{post.content}</p>
                </div>
                <div className='card-footer'>
                    <p className='author'>{post.author.name} - {post.author.role}</p>
                    <p className='date'>{convertDate(post.date)}</p>
                </div>
            </div>
        ))
    );
}
