import { Link } from "react-router-dom"

export default function Blog(){
    return (


        <div>
            <h1>Blog</h1>

            <ul>
                <li><Link to="/drone">Blog Post 1</Link></li>
                <li><Link to="/blog/post-2">Blog Post 2</Link></li>
                <li><Link to="/blog/post-3">Blog Post 3</Link></li>
            </ul>
        </div>


    )
}