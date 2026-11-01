<?php

/**
 *EXERCÍCIO 01: O Despertar (Classe vs. Função)
Conceito: Entender que uma Classe é uma "fábrica" de objetos e que métodos são funções que pertencem a esse contexto.
Cenário Procedural (O que você conhece):
Imagine que temos um sistema que calcula a área de retângulos.
php

12345678910
O Problema:
Se agora eu quiser criar um "Quadrado", eu teria que criar novas funções ou encher a função de if/else. Além disso, os dados ($base, $altura) ficam soltos na memória, não "presos" à entidade.


Sua Missão:
Crie uma classe chamada Retangulo.
Ela deve ter propriedades (atributos) para base e altura.
Crie métodos calcularArea() e calcularPerimetro().

Instancie (crie) dois objetos diferentes dessa classe com medidas diferentes e exiba os resultados.

Desafio extra: Crie um método descrever() que retorna uma string formatada: "Retângulo de base X e altura Y".

Dica de Ouro: Em PHP, usamos $this->propriedade para acessar atributos dentro da própria classe.
 *
 */
class Cor
{
    private $nome;

    public function __construct($nome)
{
        $this->nome = $nome;
}
public function getNome()
{
        return $this->nome;
}
}
class Retangulo extends FormaGeometrica implements Desenhavel
{
    protected $base, $altura, $cor;
    private static $totCriados = 0;

    public function renderizar()
    {
        return "\n[Desenhando um retângulo na tela...]";
    }
    public function __construct($base, $altura, Cor $cor)
    {
        $this->setBase($base);

        $this->setAltura($altura);

        $this->cor = $cor;
        self::$totCriados++;
    }
    public static function getTotCriados()
    {
        return self::$totCriados;
    }
    public function getAltura()
    {
        return $this->altura;
    }

    public function getBase()
    {
        return $this->base;
    }

    public function setAltura($altura)
    {
        if ($altura <=0)
            {
            throw new \InvalidArgumentException("\nValor Invalido");
            }

    $this->altura = $altura;

    }

    public function setBase($base)
    {
        if ($base <= 0)
            {
                throw new \InvalidArgumentException("\nValor Invalido");
            }
        $this->base = $base;

    }
    public function calcularPerimetro()
    {
        $perimetro = 2 * ($this->base + $this->altura);
        return "\nO perímetro é : " . $perimetro;
    }

    public function calcularArea()
    {
        $area = $this->base * $this->altura;
        return "\nA área é: " . $area;
    }
    public function descrever()
    {
       return "\nRetangulo de base " . $this->base . " e altura " . $this->altura . " na cor " . $this->cor->getNome();
    }
}
$cor1 = new Cor("Verde");
$retangulo1 = new Retangulo(10,4, $cor1);
$retangulo2 = new Retangulo(5,4, $cor1);

echo $retangulo2->calcularPerimetro();
echo $retangulo2->calcularArea();

echo $retangulo1->calcularPerimetro();
echo $retangulo1->calcularArea();

exibirNoCanvas($retangulo1);
echo $retangulo1->descrever();
echo $retangulo2->descrever();



/**
 * Adicione o método __construct($base, $altura) na sua classe Retangulo.
 * EX 002
Dentro dele, atribua os valores recebidos às propriedades $this->base e $this->altura.
Refatore a criação dos seus dois retângulos para que eles já nasçam com os valores, usando apenas uma linha para cada (ex: $retangulo1 = new Retangulo(10, 4);).
Mantenha os outros métodos (calcularArea, calcularPerimetro, descrever) como estão e exiba os resultados na tela.
 */

/**
 * EX003
 * Mude a visibilidade das propriedades $base e $altura de public para private.
Crie os métodos getBase(), getAltura(), setBase($base) e setAltura($altura).
A Regra de Ouro: Dentro dos métodos setBase e setAltura, adicione uma validação. Se o valor recebido for menor ou igual a zero (<= 0), não altere a propriedade (você pode dar um echo "Valor inválido!" ou simplesmente ignorar).
O Pulo do Gato: Dentro do seu método __construct, em vez de atribuir direto ($this->base = $base), chame os setters ($this->setBase($base)). Assim, a validação do setter também protege o construtor!
No seu bloco de execução, tente acessar $retangulo1->base diretamente (isso vai gerar um Fatal Error, o que é ótimo, pois prova que está protegido). Comente essa linha e use os getters (echo $retangulo1->getBase()) para mostrar os valores.
 */

/** EX004
Crie uma nova classe chamada Quadrado logo abaixo da classe Retangulo.
Faça ela herdar da classe Retangulo usando a palavra-chave extends: class Quadrado extends Retangulo.
Um quadrado só precisa de uma medida: o $lado. Crie um construtor para o Quadrado que receba apenas $lado.
O Pulo do Gato (parent::): Dentro do construtor do Quadrado, você precisa chamar o construtor da classe "pai" (o Retângulo) para inicializar a base e a altura (usando os setters do pai!). Você faz isso usando parent::__construct($lado, $lado);.
No seu bloco de execução (no final do arquivo), crie um objeto $quadrado = new Quadrado(5);.
Chame os métodos calcularArea(), calcularPerimetro() e descrever() no $quadrado. Note que você não precisou escrever esses métodos na classe Quadrado, ela herdou do Retangulo!
Dica: Se o descrever() do retângulo imprimir "Retangulo de base X e altura Y", o do quadrado vai imprimir a mesma coisa, mas com os valores iguais. No próximo exercício nós vamos aprender a mudar isso!
 */


class Quadrado extends Retangulo
{

    public function __construct($lado, Cor $cor)
    {
        parent::__construct($lado, $lado, $cor);

    }

    public function descrever()
    {
        return "\nQuadrado de lado " . $this->getBase() . " na cor " . $this->cor->getNome();
    }
}
$cor2 = new Cor("Azul");
$quadrado1 = new Quadrado(4, $cor2);

echo $quadrado1->calcularArea();
echo $quadrado1->calcularPerimetro();

echo $quadrado1->descrever();

exibirNoCanvas($quadrado1);

/**
Crie uma nova classe chamada FormaGeometrica e coloque a palavra abstract na frente: abstract class FormaGeometrica.
Dentro dela, declare dois métodos abstratos (sem chaves, apenas com ponto e vírgula no final):

Faça a sua classe Retangulo herdar de FormaGeometrica (class Retangulo extends FormaGeometrica).
A Prova do Algodão: No seu bloco de execução, tente criar uma instância da classe abstrata: $forma = new FormaGeometrica();. O PHP vai gerar um Fatal Error dizendo que não pode instanciar uma classe abstrata. (Isso é ótimo! Comente a linha depois para o código rodar).
Rode o código. Note que o Retangulo e o Quadrado continuam funcionando perfeitamente, pois eles já implementam (têm o código) dos métodos calcularArea e descrever.
 */

abstract class FormaGeometrica
{
    abstract public function calcularArea();
    abstract public function descrever();
}


/**
Crie uma interface chamada Desenhavel.
Dentro dela, declare o método renderizar(). (Dica: Em interfaces, não usamos a palavra abstract, os métodos já são abstratos por padrão. Apenas public function renderizar();).

Faça a classe Retangulo implementar essa interface. A sintaxe é: class Retangulo extends FormaGeometrica implements Desenhavel. (Note que usamos extends para a classe e implements para a interface!).
Como o Retangulo agora assinou o contrato Desenhavel, ele é obrigado a ter o método renderizar(). Crie esse método no Retangulo retornando algo como: "\n[Desenhando um retângulo na tela...]";.

O Pulo do Gato (Polimorfismo com Interfaces): Crie uma função "solta" no seu código (fora das classes) chamada exibirNoCanvas. Essa função vai receber qualquer objeto que seja Desenhavel:
 */

    interface Desenhavel
    {
    public function renderizar();

    }


function exibirNoCanvas(Desenhavel $obj)
{
    echo $obj->renderizar();
}


/**
 Na classe Retangulo, crie uma propriedade estática e privada: private static $totalCriados = 0;.
Dentro do método __construct do Retangulo, adicione a linha self::$totalCriados++; (usamos self:: em vez de $this->).

Crie um método estático público chamado getTotalCriados() que retorna o valor de self::$totalCriados.
A Prova Real: No seu bloco de execução, crie mais alguns retângulos e quadrados. Depois, sem usar nenhuma variável de objeto, chame o método estático diretamente pela classe: echo Retangulo::getTotalCriados();.


(O resultado deve ser o número total de objetos Retangulo e Quadrado que você instanciou até agora, pois o Quadrado chama o construtor do pai!)
 *
 */

echo "\n" . Retangulo::getTotCriados();


/**
 O Cenário:
Até agora, usamos uma função solta (exibirNoCanvas) para desenhar nossas formas. Mas em um sistema real, o "Canvas" (a Tela) é uma entidade que tem estado (ela guarda as coisas que estão desenhadas nela).
Vamos criar uma classe Canvas que funciona como um "Gerenciador de Desenho". Ela vai receber várias formas geométricas, guardá-las em uma lista (array) e, quando mandarmos, ela desenha todas de uma vez.

Sua Missão:
Crie uma classe chamada Canvas.

Ela deve ter uma propriedade private $formas = []; (um array vazio para guardar os objetos).
Crie um método adicionarForma(Desenhavel $forma).
(Note o Type Hinting! O Canvas só aceita coisas que saibam ser desenhadas).
Dentro dele, adicione a forma ao array: $this->formas[] = $forma;.

Crie um método desenharTudo().
Dentro dele, faça um foreach percorrendo o array $this->formas. Para cada forma, chame o método renderizar() e dê um echo no resultado.

No bloco de execução:
Crie um objeto Canvas: $tela = new Canvas();.
Adicione o seu retângulo e o seu quadrado na tela: $tela->adicionarForma($retangulo1); e $tela->adicionarForma($quadrado1);.
Mande a tela desenhar tudo: $tela->desenharTudo();.
 */

class Canvas
{
    private $formas = [];

    public function adicionarFormas(Desenhavel $forma)
    {
        $this->formas[] = $forma;
    }

    public function desenharTudo()
    {
        foreach ($this->formas as $forma) {
            echo $forma->renderizar();

        }
    }


}

$tela = new Canvas();

$tela->adicionarFormas($retangulo1);
$tela->adicionarFormas($retangulo2);
$tela->adicionarFormas($quadrado1);

$tela->desenharTudo();
