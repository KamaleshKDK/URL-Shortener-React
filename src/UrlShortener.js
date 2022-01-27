import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
 import './urlshortener.css';

function UrlShortener() {

    const [urlLink, setUrlLink] = useState([])
    useEffect(async () => {
        try {
            let UrlShort = await axios.get("https://my-url-shortener-react.herokuapp.com/Url-shortener", {
                headers: {
                    Authorization: window.localStorage.getItem("my_token")
                }
            });
        } catch (error) {
            console.log(error)
        }
    }, [])


    useEffect(() => {
        fetchUrls()
    }, [])


    let fetchUrls = async () => {
        try {
            let TotalUrl = await axios.get("https://my-url-shortener-react.herokuapp.com/get-url")
            setUrlLink(TotalUrl.data)
        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are You Sure want to Delete ?")
            if (result) {
                await axios.delete(`https://my-url-shortener-react.herokuapp.com/url/${id}`)
                fetchUrls();
            }
        } catch (error) {
            console.log(error);
        }
    }



    const formik = useFormik({
        initialValues: {
            longUrl: ''
        },
        onSubmit: async (values) => {
            try {
                alert("Your URL is Generating...")
              await axios.post("https://my-url-shortener-react.herokuapp.com/create-url", values)
            } catch (error) {
                console.log(error)
            }
        },
    });
    return (

        <>
            <div>

                <h1 className='urlheading'>URL SHORTENER</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='row col-lg-12 text-center mt-5'>
                    <div className='input-group mb-5'>
                        <input type="text" className='form-control' placeholder='Enter Your URL' name="longUrl"
                            onChange={formik.handleChange}
                            value={formik.values.longUrl} required />
                        <button className='shortbtn btn btn-success' type="submit" >Short</button>
                    </div>
                </div>
            </form>
            {
                urlLink.map((url) => {
                    return <table class="table table-striped table-responsive">
                        <thead>
                            <tr class="tablerow">
                                <th>Original URL</th>
                                <th>Short URL</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p href="" target="_blank">{url.longUrl}</p></td>
                                <td><a href={url.longUrl} target="_blank">{`http://localhost:3000/${url.shortUrl}`}</a></td>
                                <td><button onClick={() => handleDelete(url._id)}
                                    class="btn btn-sm btn-danger">Remove</button></td>
                            </tr>
                        </tbody>
                    </table>

                })
            }



        </>

    )
}

export default UrlShortener
