"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[994],{8026:function(n,e,r){r.d(e,{DK:function(){return f},II:function(){return x},__:function(){return p},l0:function(){return c},zx:function(){return u}});var o,a,t,i,d,l=r(168),s=r(225),p=s.Z.label(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  font-size: 16px;\n  line-height: 1.7;\n  font-weight: 500;\n  width: 100%;\n"]))),c=s.Z.form(a||(a=(0,l.Z)(["\n  display: flex;\n  margin-top: 100px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  top: 100px;\n  width: 400px;\n  min-height: 250px;\n  max-height: 400px;\n  gap: 30px;\n  padding: 20px;\n  border: 1px solid white;\n  background-color: #fffffffa;\n  border-radius: 10px;\n\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n\n  color: #fff;\n"]))),x=s.Z.input(t||(t=(0,l.Z)(["\n  width: 100%;\n  height: 35px;\n  padding-left: 10px;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: 1px solid black;\n  border-radius: 5px;\n  outline: yellow;\n  background-color: rgba(255, 255, 255, 0.4);\n\n  &:focus,\n  &:hover {\n    border: 2px solid orange;\n  }\n\n  &:placeholder-shown {\n    color: black;\n    font-size: 14px;\n    font-weight: 700;\n  }\n"]))),u=s.Z.button(i||(i=(0,l.Z)(["\n  display: block;\n  margin-top: 10px;\n  width: 100%;\n  padding: 8px 30px;\n  background-image: linear-gradient(\n    to right,\n    #32d648 0%,\n    #24fec4 51%,\n    #00ff95 100%\n  );\n\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: #212121;\n  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);\n  border-radius: 10px;\n\n  font-size: 18px;\n\n  &:hover {\n    background-position: right center; /* change the direction of the change here */\n    color: ora;\n    text-decoration: none;\n  }\n\n  &:disabled {\n    background-color: rgba(255, 255, 255, 0.4);\n    background-image: none;\n    box-shadow: none;\n    border: none;\n  }\n"]))),f=s.Z.h2(d||(d=(0,l.Z)(["\n  color: black;\n  font-size: 28px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 20px;\n"])))},7567:function(n,e,r){r.d(e,{Fy:function(){return p},Sn:function(){return c},W2:function(){return u},l0:function(){return x}});var o,a,t=r(168),i=r(1040),d=r(6151),l=r(8870),s=r(6934),p=(0,s.ZP)(i.Z)({width:"100%",height:"60px","& label":{color:"#000",fontSize:14},"& label.Mui-focused":{color:"#000",fontSize:16},"& .MuiInput-underline:after":{borderBottomColor:"#ff9d00"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#000"},"&:hover fieldset":{borderColor:"#000"},"&.Mui-focused fieldset":{borderColor:"yellow"}},"& .MuiInputBase-input":{padding:"10px 12px",fontSize:16,color:"#000"}}),c=(0,s.ZP)(d.Z)({width:"100%",borderRadius:"30px",fontSize:16,textTransform:"uppercase",boxShadow:"0 0 20px rgba(255,255,255,0.5)",transition:"0.5s",backgroundSize:"200% auto",backgroundImage:"linear-gradient(to right, #c9a750 0%, #dea896  51%, #c97650  100%)","&:hover":{backgroundPosition:"right center",color:"#fff",textDecoration:"none",backgroundColor:""},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}),x=(0,s.ZP)(l.Z)(o||(o=(0,t.Z)(["\n  width: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 30px;\n  padding: 30px 20px;\n  color: black;\n  background-color: #fffffffa;\n  border-radius: 10px;\n\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n"]))),u=(0,s.ZP)(l.Z)(a||(a=(0,t.Z)(["\n  display: flex;\n  justify-content: center;\n"])))},5994:function(n,e,r){r.r(e),r.d(e,{default:function(){return g}});var o=r(890),a=r(6520),t=r(5705),i=r(2791),d=r(5048),l=r(6727),s=r(885),p=r(7567),c=r(8026),x=r(3329),u={name:"",email:"",password:""},f=l.Ry().shape({name:l.Z_().min(3,"to short, min: 3").max(20,"to long, max: 20").required(),email:l.Z_().email("Email must be a valid email address").required("Email is required"),password:l.Z_().required("No password provided.").min(7,"Password is too short - should be 8 chars minimum.")}),h=function(){var n=(0,d.I0)(),e=(0,t.TA)({initialValues:u,onSubmit:function(e,r){var o=r.resetForm;n((0,s.z2)(e)),o()},validationSchema:f}),r=!(e.isValid&&e.dirty);return(0,x.jsxs)(p.l0,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:e.handleSubmit,children:[(0,x.jsx)(o.Z,{variant:"h3",sx:{marginBottom:"30px",textTransform:"uppercase"},children:"Sign up"}),(0,x.jsx)(a.Z,{title:e.errors.name,children:(0,x.jsxs)(c.__,{children:[(0,x.jsx)(p.Fy,{required:!0,label:"Username",type:"text",name:"name",variant:"standard",onChange:e.handleChange,value:e.values.name}),e.errors.name&&e.touched.name?(0,x.jsx)("span",{children:e.errors.name}):null]})}),(0,x.jsx)(a.Z,{title:e.errors.email,children:(0,x.jsxs)(c.__,{children:[(0,x.jsx)(p.Fy,{required:!0,variant:"standard",type:"text",name:"email",label:"Email",onChange:e.handleChange,value:e.values.email}),e.errors.email&&e.touched.email?(0,x.jsx)("span",{children:e.errors.email}):null]})}),(0,x.jsx)(a.Z,{title:e.errors.password,children:(0,x.jsxs)(c.__,{children:[(0,x.jsx)(p.Fy,{required:!0,label:"Password",type:"password",name:"password",autoComplete:"current-password",variant:"standard",sx:{mb:"10px"},onChange:e.handleChange,value:e.values.password}),e.errors.password&&e.touched.password?(0,x.jsx)("span",{children:e.errors.password}):null]})}),(0,x.jsx)(p.Sn,{type:"submit",variant:"contained",disabled:r,children:"Create"})]})},b=(0,i.memo)(h),g=function(){return(0,x.jsx)("section",{children:(0,x.jsx)(p.W2,{component:"div",children:(0,x.jsx)(b,{})})})}}}]);
//# sourceMappingURL=994.91d798e6.chunk.js.map