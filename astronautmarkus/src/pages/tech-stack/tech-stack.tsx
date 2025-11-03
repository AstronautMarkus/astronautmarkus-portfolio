import TechStack from "../home/components/TechStack";

function TechStackView() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-white">
            
            <TechStack fullList={true}  />

        </section>
    );
}

export default TechStackView;