const Windowclose = 
    {
    init() 
	{
        document.body.addEventListener("click", a => 
		{
            if (a.target.classList.contains("background")) 
	        {
			   document.body.removeChild(a.target);
            }
        });
    },

    Htmltext(modalOptions) 
	{
        return `
			<div class="background">
				<div class="window"> 
					<div class="titlebar">${m.title}</div>
					<div class="padding">
					<div>${m.text1}</div>
					<div>${m.text2}</div>
					</div>
				</div>
			</div>
        `;
    },

    openwindow(modalOptions = {}) 
	{
        m = Object.assign(
		{
            title: ' ',
            content1: ' ',
			content2: ' '
        }, modalOptions);

        const change = this.Htmltext(m);
        document.body.insertAdjacentHTML("afterbegin", change);
    },
};

document.addEventListener("DOMContentLoaded", () => Windowclose.init());