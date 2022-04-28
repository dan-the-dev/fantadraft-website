import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import PostPage from '../../components/postPage'

const Blog: NextPage = () => {
    const router = useRouter()

  return (
    <div>

        <PostPage 
            title="Cos'è Fantadraft: la rivoluzione del Fantacalcio."
            date='30 Maggio 2022'
            mins={5}
            imgurl='/blog/cupcakes.jpeg'
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, quam vel facilisis vehicula, augue justo vehicula ipsum, et bibendum mi ex nec est. Quisque elementum diam quis erat interdum, eu mollis lorem ultricies. Pellentesque semper placerat neque, et ultrices felis feugiat nec. Ut ac odio nisl. Aenean eget magna feugiat, hendrerit justo vel, interdum leo. Duis mattis porttitor justo, finibus luctus risus feugiat eu. Pellentesque eu ex porttitor, accumsan augue vitae, gravida lacus. Aliquam iaculis nisi sit amet nulla faucibus iaculis. Donec efficitur purus enim, vel rhoncus ligula laoreet quis. Pellentesque in lorem dapibus, ultricies libero a, pretium elit. Donec vehicula vestibulum nisl, eget ullamcorper ipsum tristique in.
            </p>
            <br />
            <h2 className="text-lg font-bold">Test</h2>
            <p>
                Vestibulum nec consequat lorem, a convallis nibh. Nulla dapibus metus non feugiat tincidunt. Donec eget pretium magna. Nulla sit amet tincidunt turpis. Donec ante sem, ornare nec enim sed, fermentum tempor risus. Morbi rhoncus porttitor mi in dictum. Nam interdum tristique turpis, eu vestibulum enim pulvinar sit amet. Etiam eleifend turpis at massa faucibus, vel rhoncus ligula mattis. In auctor tempor ex vel elementum. Nulla non posuere tellus. Duis aliquet lacinia egestas. Aenean ornare tempor nisl a porta. Cras feugiat ante a mi molestie iaculis.
            </p>
            <br />
            <p>
                Mauris facilisis augue nibh, sit amet placerat nibh suscipit sit amet. Aliquam ullamcorper neque sit amet urna semper, sit amet elementum ipsum dignissim. Donec lectus dui, molestie et nunc a, elementum eleifend ante. Nullam tincidunt luctus nulla, non commodo nisi luctus quis. Maecenas id nisi lacinia ipsum scelerisque accumsan. Suspendisse eu mollis urna, vitae pulvinar erat. Suspendisse faucibus nec tellus finibus euismod. Quisque sollicitudin sem semper luctus suscipit. Nulla non ultricies nulla, vel maximus enim. Duis purus tortor, tempor sed felis sit amet, facilisis porttitor odio. Mauris nec diam pellentesque, fringilla nisl sit amet, convallis massa. Morbi dapibus molestie risus, quis eleifend massa suscipit in. Cras id tellus nec turpis varius consequat.
            </p>
        </PostPage>

    </div>
  )
}

export default Blog
