import React, {useState, useEffect, useRef} from "react";
import "./news.css";
import {memo} from "react";


const App = () => {
    const [newsList, setNewsList] = useState([]);
    const [currentView, setCurrentView] = useState("list");
    const [editingIndex, setEditingIndex] = useState(null);
    const [formData, setFormData] = useState({title: "", content: ""});
    const [viewingIndex, setViewingIndex] = useState(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const savedNews = JSON.parse(localStorage.getItem("newsList")) || [];
        setNewsList(savedNews);
    }, []);

    const saveNews = (e) => {
        e.preventDefault();
        const updatedNews = [...newsList];

        if (editingIndex === null) {
            updatedNews.push({...formData, content: contentRef.current.innerHTML});
        } else {
            updatedNews[editingIndex] = {...formData, content: contentRef.current.innerHTML};
        }

        setNewsList(updatedNews);
        localStorage.setItem("newsList", JSON.stringify(updatedNews));
        setFormData({title: "", content: ""});
        setEditingIndex(null);
        setCurrentView("list");
    };

    const deleteNews = (index) => {
        const updatedNews = [...newsList];
        updatedNews.splice(index, 1);
        setNewsList(updatedNews);
        localStorage.setItem("newsList", JSON.stringify(updatedNews));
    };

    const openForm = (view, index = null) => {
        setCurrentView(view);
        if (view === "edit") {
            setEditingIndex(index);
            setFormData(newsList[index]);
        } else {
            setEditingIndex(null);
            setFormData({title: "", content: ""});
        }
    };

    const viewNews = (index) => {
        setViewingIndex(index);
        setCurrentView("view");
    };

    const renderForm = () => (
        <form onSubmit={saveNews} className="news-form">
            <div className="form-group">
                <label>Tiêu Đề:</label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                />
            </div>
            <div className="form-group">
                <label>Nội Dung:</label>

                <div className="toolbar">
                    <button type="button" onClick={() => document.execCommand("bold")}>B</button>
                    <button type="button" onClick={() => document.execCommand("italic")}>I</button>
                    <button type="button" onClick={() => document.execCommand("underline")}>U</button>
                    <button type="button" onClick={() => document.execCommand("justifyLeft")}>Căn trái</button>
                    <button type="button" onClick={() => document.execCommand("justifyCenter")}>Căn giữa</button>
                    <button type="button" onClick={() => document.execCommand("justifyRight")}>Căn phải</button>
                </div>
                <div
                    ref={contentRef}
                    contentEditable={true}
                    className="form-control"
                    style={{minHeight: "150px", padding: "10px", borderRadius: "5px"}}
                >
                    {formData.content}
                </div>
            </div>
            <div className="form-actions">
                <button type="submit" className="btn btn-success">
                    {editingIndex === null ? "Tạo Mới" : "Cập Nhật"}
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setCurrentView("list")}
                >
                    Hủy
                </button>
            </div>
        </form>
    );

    const renderList = () => (
        <div className="news-list">
            <div className="header">
                <h1>Quản lý Tin Tức</h1>
                <div className="btn-container">
                    <button className="btn btn-primary" onClick={() => openForm("create")}>
                        Tạo Tin Mới
                    </button>
                </div>
            </div>
            <div className="news-items">
                {newsList.map((news, index) => (
                    <div className="news-item" key={index}>
                        <h3>{news.title}</h3>
                        <button
                            className="btn btn-info btn-sm"
                            onClick={() => viewNews(index)}
                        >
                            Xem
                        </button>
                        <button
                            className="btn btn-warning btn-sm"
                            onClick={() => openForm("edit", index)}
                        >
                            Sửa
                        </button>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteNews(index)}
                        >
                            Xóa
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderView = () => {
        const news = newsList[viewingIndex];
        return (
            <div className="news-view">
                <h2>{news.title}</h2>
                <div dangerouslySetInnerHTML={{__html: news.content}}/>
                <button
                    className="btn btn-secondary"
                    onClick={() => setCurrentView("list")}
                >
                    Quay Lại
                </button>
            </div>
        );
    };

    return (
        <div className="container">
            {currentView === "list" && renderList()}
            {(currentView === "create" || currentView === "edit") && renderForm()}
            {currentView === "view" && renderView()}
        </div>
    );
};

export default memo(App);
