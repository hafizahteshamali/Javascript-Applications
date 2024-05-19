function findReplacing(){
    let para = document.getElementById('para');
    let finding = document.getElementById('finding');
    let replacing = document.getElementById('replacing');

    let updateValue = para.innerText.replaceAll(finding.value, replacing.value);
    para.innerText = updateValue;
}