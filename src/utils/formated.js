export function FormattedNumber({ number }) {
    return <>{number?.toLocaleString('pt-BR')}</>;
  }