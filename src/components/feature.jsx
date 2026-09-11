function Features () {
    return (
        <section className="bg-green-950 h-125">
            <div className=" flex shrink-0 justify-between items-center p-30  gap-6 ">
                <div className="relative right-16 grid-cols-1 -translate-y-50 mr-20 mt-15  ">
        <h1 className="text-2xl text-amber-100 text-start font-light">Achetez des </h1>
        <p className="text-2xl text-amber-100 text-start font-extrabold">des antiquité et des objects rarissime </p>
         <p className="text-2xl text-amber-100 text-start font-light">présenter par des professionnels</p>
         </div>
         <img src="/or.jpg"
         alt="image jpg"
         className=" relative right-35 -bottom-10 w-100 h-100 rounded-full object-cover border-2 border-amber-200 -translate-y-20 mr-30" />
         </div>
        </section>
    )
};
export default Features;