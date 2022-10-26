let dataBlog = [];

function addBlog(event) {
    event.preventDefault()

    let projectName = document.getElementById('input-title').value;
    let description = document.getElementById('description').value;
    let imgProject = document.getElementById('input-file').files[0];

    imgProject = URL.createObjectURL(imgProject)
    console.log(imgProject)

    let blog = {
        projectName,
        description,
        imgProject,
    }

    dataBlog.push(blog)
    console.log(dataBlog)

    renderBlog()
}

function renderBlog() {
    document.getElementById('contents').innerHTML = ''

    for(let index = 0; index < dataBlog.length; index++) {
        console.log(dataBlog[index])

        document.getElementById('contents').innerHTML += `
        <div id="blog-list1" class="blog-list">
            <div>
                <img class="mobile-img" src="${dataBlog[index].imgProject}" alt="aplikasi Mobile">
            </div>
            <a href="./blog-detail/blog-detail.html" target="_blank">
                <h2>${dataBlog[index].projectName}</h2>
            </a>
            <a>durasi : 3 bulan</a>
            <p>
                ${dataBlog[index].description}
            </p>
            <div class="android-icon">
                <img src="./assets/img/playstore.png" alt="playstore icon">
                <img src="./assets/img/android.png" alt="android icon">
                <img src="./assets/img/java.png" alt="java icon">
            </div>
            <div class="btn-group">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
        `
    }
}