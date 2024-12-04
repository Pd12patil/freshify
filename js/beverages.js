const darkmodes = document.getElementById('darkmode');
const lightmodes = document.getElementById('lightmode');
const bodys = document.getElementById('body');
const filters = document.querySelectorAll('.filter');

function getdark(mode)
{
    if (mode =="dark")
    {
        bodys.style.backgroundColor = 'black';
        lightmodes.style.display = 'inline-block';
        darkmodes.style.display = 'none';
        bodys.style.color = 'white';
    }
    else
    {
        bodys.style.backgroundColor = 'white';
        lightmodes.style.display = 'none';
        darkmodes.style.display = 'inline-block';
        bodys.style.color = 'black';
    }
}

