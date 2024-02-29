import { getSession} from '@/src/actions/auth'
import LogoutButton from '@/src/components/ui/customui/LogoutButton'
import React from 'react'


interface Props {
    params: {
        userId: string
    }
}

const page = ({ params: { userId } }: Props) => {
    const user = getSession();
    return (
        <div className='m-4'>
            <pre>
                <code>
                    {
                        JSON.stringify(user, null, 2)
                    }
                </code>
            </pre>
            <LogoutButton/>
        </div>
    )
}

export default page