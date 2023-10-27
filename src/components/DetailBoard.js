import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailBoard = ( props ) => {
// React hook
    const {idx} = useParams();

// DetailBoard Data
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [createDate, setCreateDate] = useState('');
    const [comment, setComment] = useState({
        boardId:'',
        commentAuthor:'',
        comment:'',
    });

// handle
const showTitle = () => setTitle(props.generalBoardData.groupTitle);

// Func


//UI
    return (
        <div className='DetailBoardCon'>
            <h2>게시글 상세보기 표시</h2>
            <table className=''>
                <thead></thead>
                <tbody>
                    <tr>제목 칸 <button>수정</button><button>삭제</button></tr>
                    <tr>내용 칸</tr>
                    <tr>댓글 칸</tr>
                    <tr>댓글작성 칸 
                    <button>댓글 쓰기
                        </button></tr>
                </tbody>
            </table>
        </div>
    );
};

export default DetailBoard;