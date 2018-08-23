const products = [
  {
    id: "5b7f09a53047dcaf67f8102e",
    picture: "https://picsum.photos/300/300/?random",
    name: "sint aute esse",
    price: "$ 3,687.690",
    description:
      "Elit elit eu pariatur cillum in. Occaecat qui amet pariatur do nostrud veniam anim adipisicing ullamco. Proident incididunt quis nulla occaecat ex culpa ex. Amet eiusmod sint labore ex incididunt sit officia proident nisi minim sint ullamco.",
    category: "Eletrônicos, TV e Áudio"
  },
  {
    id: "5b7f09a51176c07b09ba4acd",
    picture: "https://picsum.photos/300/300/?random",
    name: "sunt commodo ad",
    price: "$ 3,855.430",
    description:
      "Nostrud est anim esse non dolore dolore excepteur ut ut aliqua reprehenderit non magna in. Consectetur eu et fugiat in ullamco id sint Lorem cupidatat aliquip elit. Proident dolore anim ullamco cupidatat reprehenderit id proident consequat cupidatat dolore. Qui est do eu exercitation commodo ex qui nisi quis sint enim non. Lorem laboris minim eiusmod anim.",
    category: "Eletrônicos, TV e Áudio"
  },
  {
    id: "5b7f09a557bfe0a7d733b083",
    picture: "https://picsum.photos/300/300/?random",
    name: "deserunt irure ea",
    price: "$ 1,200.170",
    description:
      "Elit ullamco enim ipsum laboris mollit do eiusmod enim esse non. Occaecat labore nostrud officia fugiat nulla dolore pariatur enim magna ad aliqua consequat. Magna officia officia aute veniam occaecat voluptate aliquip ad amet aliqua magna cillum. Fugiat dolore non do officia nulla in proident aute quis id proident ut veniam.",
    category: "Celulares e Comunicação"
  },
  {
    id: "5b7f09a5e3c4d7ab6ce70205",
    picture: "https://picsum.photos/300/300/?random",
    name: "qui est laborum",
    price: "$ 3,114.570",
    description:
      "Fugiat Lorem anim ea cupidatat veniam Lorem commodo dolor enim nisi commodo anim. Ipsum ex minim Lorem mollit ad fugiat tempor nisi et. Do veniam occaecat qui eu ea anim et est voluptate. Ex officia veniam laborum labore occaecat cillum esse est. Ex eu eu dolor dolore id veniam sit officia mollit fugiat non duis. Ea veniam nulla ad et fugiat aliquip in reprehenderit velit elit reprehenderit et irure sit. Consectetur mollit elit labore incididunt dolore laboris.",
    category: "Eletrodomésticos"
  },
  {
    id: "5b7f09a501a339856ca58cad",
    picture: "https://picsum.photos/300/300/?random",
    name: "consequat officia non",
    price: "$ 2,086.790",
    description:
      "Eu adipisicing ad sit duis ut ullamco ex quis id elit est magna cillum eiusmod. Minim consequat pariatur officia exercitation cupidatat ex ex. Cillum officia irure ullamco aliqua esse ullamco qui nisi amet culpa duis culpa id. Magna consectetur occaecat quis eu labore occaecat proident anim aliquip id nisi eu culpa. Minim nulla incididunt aliquip officia officia pariatur. Consectetur ipsum sunt veniam et do in ipsum. Labore in quis nostrud ut non est cupidatat id voluptate veniam est ex.",
    category: "Eletrônicos, TV e Áudio"
  },
  {
    id: "5b7f09a5c6f60705049d99ee",
    picture: "https://picsum.photos/300/300/?random",
    name: "et ad et",
    price: "$ 2,089.830",
    description:
      "In consequat non minim mollit officia. Non id esse cillum laborum excepteur nulla. Ad dolor cillum aute voluptate veniam incididunt deserunt. Ullamco voluptate laboris non aute.",
    category: "Eletrodomésticos"
  },
  {
    id: "5b7f09a543c34ff002035d60",
    picture: "https://picsum.photos/300/300/?random",
    name: "sint officia eiusmod",
    price: "$ 3,679.840",
    description:
      "Quis minim ea dolor voluptate laboris in quis minim voluptate occaecat ex qui do. Fugiat enim cillum voluptate magna voluptate culpa in laborum officia incididunt. Sint commodo consequat labore ipsum est aliqua excepteur eu tempor ut.",
    category: "Celulares e Comunicação"
  },
  {
    id: "5b7f09a55b514e9844da2683",
    picture: "https://picsum.photos/300/300/?random",
    name: "magna irure fugiat",
    price: "$ 1,901.670",
    description:
      "Officia officia dolor enim proident. Qui irure ad dolor proident anim adipisicing irure anim minim excepteur. Laboris quis elit ullamco velit pariatur esse. Do aute ea aliqua ipsum irure. Aliqua sint sint mollit quis et commodo aliquip. Enim veniam anim velit ipsum pariatur deserunt do esse aliqua consequat eiusmod aliquip ex.",
    category: "Eletrônicos, TV e Áudio"
  },
  {
    id: "5b7f09a5168f84c33e3619b0",
    picture: "https://picsum.photos/300/300/?random",
    name: "laborum mollit ex",
    price: "$ 3,506.020",
    description:
      "Adipisicing velit ut enim sunt nostrud id incididunt pariatur dolore sunt sint eiusmod. Qui nisi qui exercitation exercitation non esse consectetur laboris ex labore labore reprehenderit eu. Ut enim aute laboris tempor cillum sit ut tempor adipisicing.",
    category: "Eletrônicos, TV e Áudio"
  },
  {
    id: "5b7f09a5697f4006a689e853",
    picture: "https://picsum.photos/300/300/?random",
    name: "enim fugiat adipisicing",
    price: "$ 2,204.230",
    description:
      "Velit fugiat pariatur cillum occaecat ipsum veniam et nostrud esse culpa sit incididunt quis. Velit pariatur aliquip ut eu mollit nostrud. Exercitation ex ad commodo dolore incididunt occaecat Lorem minim ea elit non irure. Eiusmod eu voluptate occaecat tempor sint incididunt et eiusmod. Incididunt elit qui ut occaecat nostrud ad et eiusmod fugiat adipisicing reprehenderit. Adipisicing consectetur do excepteur ipsum magna do sint voluptate velit consequat reprehenderit enim dolore. Commodo ex sint duis eiusmod ea excepteur sint proident exercitation fugiat.",
    category: "Eletrodomésticos"
  },
  {
    id: "5b7f09a5b69fca47fbc3bbf7",
    picture: "https://picsum.photos/300/300/?random",
    name: "ut dolor cupidatat",
    price: "$ 2,331.690",
    description:
      "Culpa qui culpa eu non ipsum aliqua aliqua minim cillum nostrud. Duis incididunt cillum veniam officia eiusmod veniam. Duis laboris cupidatat aliquip reprehenderit. Exercitation dolore deserunt deserunt minim aliqua. Sit fugiat ullamco occaecat ipsum ipsum anim. Consequat enim veniam enim pariatur eiusmod ea velit mollit.",
    category: "Eletrônicos, TV e Áudio"
  },
  {
    id: "5b7f09a5c8724c3dcf832f2b",
    picture: "https://picsum.photos/300/300/?random",
    name: "cillum laborum adipisicing",
    price: "$ 1,766.060",
    description:
      "Quis cupidatat esse dolor veniam tempor veniam. Magna culpa laborum aliquip dolore enim sint minim minim quis consequat minim consectetur aliquip. Ullamco reprehenderit exercitation pariatur cillum cupidatat. Incididunt sunt est elit sunt officia aute amet irure duis. Labore est incididunt ut consectetur reprehenderit ex anim. Culpa cillum exercitation reprehenderit magna ipsum sint. Consectetur aute proident sit ad irure dolore dolore ut.",
    category: "Educação"
  },
  {
    id: "5b7f09a51ffad0feaafc84be",
    picture: "https://picsum.photos/300/300/?random",
    name: "aute commodo consectetur",
    price: "$ 2,552.330",
    description:
      "Nisi dolore eu sint est qui veniam id anim velit consequat ipsum laborum ipsum quis. Eiusmod occaecat incididunt veniam sint cillum. Lorem adipisicing ipsum adipisicing cupidatat officia. Duis exercitation sint fugiat laborum duis eiusmod enim eiusmod. Ea ex ad deserunt pariatur reprehenderit ut non veniam aliqua do. Aliqua sit ipsum veniam aute mollit. Ad ut quis mollit cillum.",
    category: "Automotivo"
  },
  {
    id: "5b7f09a581e8c0593ab17856",
    picture: "https://picsum.photos/300/300/?random",
    name: "elit veniam mollit",
    price: "$ 2,646.230",
    description:
      "Laboris fugiat irure aliqua et pariatur laboris exercitation. Sunt do esse consequat do reprehenderit in laboris amet nostrud. Laborum ad consectetur nostrud minim ullamco pariatur duis labore Lorem. Voluptate ad mollit irure veniam est aliqua nostrud est aute. Velit elit aliquip esse veniam culpa. Aliquip reprehenderit elit consectetur qui est est nostrud do deserunt occaecat sint et.",
    category: "Brinquedos"
  },
  {
    id: "5b7f09a51effdd3655ae024e",
    picture: "https://picsum.photos/300/300/?random",
    name: "sit excepteur adipisicing",
    price: "$ 1,582.580",
    description:
      "Officia amet culpa sit sit exercitation laboris eiusmod ex excepteur anim occaecat dolor. Magna duis duis tempor duis ullamco consequat consequat anim anim incididunt elit duis veniam. Laborum ad velit eu id cillum esse adipisicing id reprehenderit anim sunt ut. Aliquip do anim sunt enim quis ad do minim cillum irure. Fugiat consequat culpa dolore veniam voluptate velit dolore laborum. Duis consectetur cillum sunt eu sint labore nulla irure proident duis do velit sint.",
    category: "Eletrônicos, TV e Áudio"
  },
  {
    id: "5b7f09a54c51c2dc318b5417",
    picture: "https://picsum.photos/300/300/?random",
    name: "ex sunt ex",
    price: "$ 3,349.620",
    description:
      "Cillum elit consequat ad elit occaecat ad voluptate aute duis nisi eiusmod consequat nostrud. Mollit ut velit ipsum aliquip ipsum. Anim fugiat dolor proident aute sint ad cupidatat. Lorem labore id in proident magna in elit dolore Lorem ipsum voluptate. Ut commodo in duis velit amet.",
    category: "Automotivo"
  },
  {
    id: "5b7f09a5cabf3d69fd7afd7c",
    picture: "https://picsum.photos/300/300/?random",
    name: "fugiat in ad",
    price: "$ 3,967.710",
    description:
      "Lorem velit ipsum nostrud consequat irure. Minim excepteur elit irure sunt voluptate voluptate sit. Sunt aute sint consectetur culpa voluptate occaecat excepteur ad ea laboris magna proident velit nostrud. Commodo duis eiusmod sit voluptate cupidatat do non eiusmod qui culpa proident.",
    category: "Eletrônicos, TV e Áudio"
  },
  {
    id: "5b7f09a594b16360f728a08c",
    picture: "https://picsum.photos/300/300/?random",
    name: "dolore elit ex",
    price: "$ 3,796.530",
    description:
      "Sunt irure mollit officia nulla consectetur qui officia minim et. In reprehenderit dolore occaecat elit laborum dolor esse nisi irure enim. Sunt irure dolore commodo sint Lorem aliquip nulla ex id. Adipisicing aliqua ipsum sint ex enim proident dolor Lorem qui adipisicing duis id exercitation in. Nulla velit tempor est enim excepteur ea enim incididunt ut minim.",
    category: "Educação"
  },
  {
    id: "5b7f09a58901e98bd7cb66c2",
    picture: "https://picsum.photos/300/300/?random",
    name: "pariatur magna consectetur",
    price: "$ 1,600.760",
    description:
      "Deserunt irure velit deserunt amet esse non velit. Occaecat ut amet nostrud aliqua do labore aliqua consectetur eiusmod non sint proident. Incididunt nostrud dolor nisi minim et ea minim sunt culpa nulla qui laboris id. Id commodo sunt eiusmod occaecat.",
    category: "Educação"
  },
  {
    id: "5b7f09a55f618290a37bbaaa",
    picture: "https://picsum.photos/300/300/?random",
    name: "ullamco consectetur Lorem",
    price: "$ 2,706.050",
    description:
      "Id nisi commodo ullamco in laborum laborum aute. Officia pariatur cillum cupidatat occaecat fugiat voluptate. Ex sit aute eiusmod mollit est duis aliqua adipisicing sunt deserunt aliquip proident.",
    category: "Brinquedos"
  }
];
