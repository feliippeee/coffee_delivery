import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "../../components/Input";

const Schema = z.object({
    name: z.string().nonempty('campo obrigatório').min(3,'não use abreviações'),
    lastName: z.string().nonempty('sobrenome obrigatório'),
    city: z.string().nonempty('cidade obrigatório').min(3,'min 3 caracteres')
})

type ConfirmSchema = z.infer<typeof Schema>

export function Checkout() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<ConfirmSchema>({
        resolver: zodResolver(Schema)
    })

    function handleSubmitForm(data: ConfirmSchema ) {
        console.log('dados', data)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
             <input                
                type="text"
                placeholder="Cidade" 
                {...register('city')}
            />
            {errors.city && <span>{errors.city.message}</span>}
            
            <input type="text"
                {...register('name')}
            />
            {errors.name && <span>{errors.name.message}</span>}
            
            <input type="text"
                {...register('lastName')}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
            <button type="submit">Enviar</button>
        </form>
    )
}







