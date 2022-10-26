let dataBlog = []

function addBlog(event) {
    event.preventDefault()

    let projectName = document.getElementById('projectName').value;
    let description = document.getElementById('description').value;
    let imgProject = document.getElementById('file').files[0];

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
                <div class="col" id="contents">
                    <div class="card h-100 px-3 py-2 mt-5 shadow">
                        <img src="${dataBlog[index].imgProject}" class="card-img-top" alt="android apps">
                        <div class="card-body">
                            <a href="#">
                                <h5 class="card-title">${dataBlog[index].projectName}</h5>
                            </a>
                            <p class="card-text text-muted">durasi : 3 bulan</p>
                            <p class="card-text">${dataBlog[index].description}.</p>
                        </div>
                        <div class="d-flex ms-2 my-3">
                            <img src="../assets/img/playstore.png" alt="playstore icon"
                                style="width: 30px; margin-right: 20px;">
                            <img src="../assets/img/android.png" alt="android icon"
                                style="width: 30px; margin-right: 20px;">
                            <img src="../assets/img/java.png" alt="java icon" style="width: 30px">
                        </div>
                        <div class="d-flex justify-content-evenly">
                            <button type="button" class="btn btn-primary flex-fill m-2">edit</button>
                            <button type="button" class="btn btn-primary flex-fill m-2">delete</button>
                        </div>
                    </div>
                </div>
            `
        }
    }