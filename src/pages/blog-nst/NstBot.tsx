import "./nstBlog.css"

import qotd from '../../assets/qotd.png'
import imageone from '../../assets/imageone.png'
import imagetwo from '../../assets/imagetwo.png'

const NstBot = () => {
  return (
    <div className="nstBotBody" >

      <div className="nstBotCard">


        <h1 className="h1tagQotd" >Ayush Kumar</h1>

        <h1 className="h1tagQotd" >Location</h1>
        <h1 className="h1tagQotd" >Bengaluru, India</h1>

        <h1 className="h1tagQotd" >Education</h1>
        <h1 className="h1tagQotd" >Scaler school of tech</h1>



        <h1 className="h1tagQotd" >Pronouns</h1>
        <h1 className="h1tagQotd" >He/Him</h1>


        <h1 className="h1tagQotd" >Posted on:</h1>
        <h1 className="h1tagQotd" >Nov 2, 2024</h1>



      </div>



      <div className="nstBotContent">

        <div>
          <img className="imageQotd" src={qotd} alt="Question Of The Day" />

<br /><br />
<br /><br />
          <h1 className="titleOfqotd">🧠 Automating Newton School’s “Question of the Day” Bot</h1>

<br />
          <h3 className="descriptionOfQotd" >“Anything you can do with a GUI, you can do faster with code.” 🚀</h3>

          <div className="linQotd"></div>

          <br /><br />
          <br /><br />


            <h1 className="titleOfqotd">👋 Introduction</h1>

<br />
<p>
  Every day at 5:30 AM IST (00:00 UTC), Newton School drops a Question of the Day (QOTD).
The faster you solve it, the higher your rank on the leaderboard.
<br />
<br />

But hey — what if you didn’t have to wake up early to grab that rank? 😉
This post walks you through reverse-engineering the QOTD API, fetching the question, using Gemini AI to solve it, and submitting automatically via a bot — all while having fun learning how APIs work.

<br />
<br />
<strong>💡 Disclaimer: This tutorial is for educational purposes. Don’t misuse it on production accounts.</strong>
</p>


<br /><br /><br /><br />



            <h1 className="titleOfqotd">🧩 Step 1: Understanding How APIs Work</h1>

<br />
<p>
APIs (Application Programming Interfaces) are like messengers — they let your code talk to a server and get data back.
<br />
<br />
Instead of clicking buttons or loading pages, you can send requests directly to the server — faster, cleaner, and scriptable.

<br />
<br />

When you open the Newton School website, it sends background network calls to their API — exactly what we’re going to tap into.
</p>


<section className="imageCont">

<img src={imageone} className="witdhTst" alt="image" />


</section>




            <h1 className="titleOfqotd">🔍 Step 2: Capture Your Authentication Key</h1>

<br />
<p>
Newton School checks if you’re logged in before sending data.
That’s where the Bearer Token (auth key) comes in.

<br />
<br />
Here’s how to grab it (Firefox example):
<br />
<br />

<ol>
  <li>Open your browser’s DevTools → Network Tab.</li>
  <li>Refresh the page or go to the QOTD section.</li>
  <li>Find the request named "https://my.newtonschool.co/api/v1/user/me/" using search inside Devtools</li>
  <li>Then navigate through Header section and check of Authorization it would something like "Bearer `random-string`"</li>
</ol>

</p>


<section className="imageCont">

<img src={imagetwo} className="witdhTst" alt="image" />


</section>



            <h1 className="titleOfqotd">⚙️ Step 3: Fetching the Question of the Day</h1>

<br />
<p>
We’ll recreate that network request using Python.
Here’s how to fetch the QOTD details:
<br />
<br />

<br />
<br />

When you open the Newton School website, it sends background network calls to their API — exactly what we’re going to tap into.
</p>


<section className="imageCont">

<img src={imageone} className="witdhTst" alt="image" />


</section>



            <h1 className="titleOfqotd">🧩 Step 1: Understanding How APIs Work</h1>

<br />
<p>
APIs (Application Programming Interfaces) are like messengers — they let your code talk to a server and get data back.
<br />
<br />
Instead of clicking buttons or loading pages, you can send requests directly to the server — faster, cleaner, and scriptable.

<br />
<br />

When you open the Newton School website, it sends background network calls to their API — exactly what we’re going to tap into.
</p>


<section className="imageCont">

<img src={imageone} className="witdhTst" alt="image" />


</section>



            <h1 className="titleOfqotd">🧩 Step 1: Understanding How APIs Work</h1>

<br />
<p>
APIs (Application Programming Interfaces) are like messengers — they let your code talk to a server and get data back.
<br />
<br />
Instead of clicking buttons or loading pages, you can send requests directly to the server — faster, cleaner, and scriptable.

<br />
<br />

When you open the Newton School website, it sends background network calls to their API — exactly what we’re going to tap into.
</p>


<section className="imageCont">

<img src={imageone} className="witdhTst" alt="image" />


</section>



        </div>







      </div>



    </div>
  )
}

export default NstBot