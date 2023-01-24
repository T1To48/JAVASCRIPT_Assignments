const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
const ordrdList=document.createElement("ol");
document.body.appendChild(ordrdList);
ordrdList.style.listStyleType="none";
users.forEach((profile)=>{
   ordrdList.innerHTML+=`<li>${profile.firstName}${profile.lastName}</li>`;
})
const lines=document.querySelectorAll("ol li");
lines[0].setAttribute("data-id","167464");
lines[1].setAttribute("data-id","578447");
lines[2].setAttribute("data-id","864578");

