import TopMenu from "@/components/TopMenu/TopMenu"
import ListProdutor from "@/components/ListProdutor/ListProdutor"
import Graphics from "@/components/Graphics/Graphics"
import { FormProvider } from "@/context/formContext/FormContext"

export default function Home() {
  return (
    <FormProvider>
      <main>
        <TopMenu />
        <div className="text-4xl font-bold text-center mt-10">
          Brain Agriculture
        </div>
        <div className="flex justify-center items-start h-screen">
          <div className="w-1/2 p-8 mt-20">
            <Graphics />
          </div>
          <div className="w-1/2 p-8 mt-20">
            <ListProdutor />
          </div>
        </div>
      </main>

    </FormProvider>

  )
}
